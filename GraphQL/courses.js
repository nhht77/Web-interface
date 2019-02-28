const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const CourseType = new GraphQLObjectType({
    name:'Course',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
    })
});

// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        course:{
            type:CourseType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/courses/'+ args.id)
                    .then(res => res.data);

            }
        },
        courses:{
            type: new GraphQLList(CourseType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/courses')
                    .then(res => res.data);
            }
        }
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addCourse:{
            type:CourseType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/courses', {
                    name:args.name,
                    description: args.description,
                })
                .then(res => res.data);
            }
        },
        deleteCourse:{
            type:CourseType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                return axios.delete('http://localhost:3000/courses/'+args.id)
                .then(res => res.data);
            }
        },
        editCourse:{
            type:CourseType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                name: {type: GraphQLString},
                description: {type: GraphQLString},
            },
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/courses/'+args.id, args)
                .then(res => res.data);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});