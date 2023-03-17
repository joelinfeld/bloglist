const _ = require('lodash');

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, next) => sum + next.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (!blogs.length) return 'no blogs'
    else return blogs.reduce((max, next) => max.likes > next.likes ? max : next)
}

const mostBlogs = (blogs) => {
    const result = _(blogs)
        .groupBy('author')
        .map((value, key) => {
            return { author: key, blogs: value.length }
        })
        .reduce((max, next) => max.blogs > next.blogs ? max : next)
    return result
}

const mostLikes = (blogs) => {
    const result = _(blogs)
        .groupBy('author')
        .map((value, key) => {
            return { author: key, likes: _.sumBy(value, (o) => o.likes)}
        })
        .reduce((max, next) => max.likes > next.likes ? max : next)
    return result
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}

