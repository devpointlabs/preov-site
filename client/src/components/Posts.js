import React from 'react'
import axios from 'axios'
import {Card, Image, } from 'semantic-ui-react'

class Posts extends React.Component{
  state = { posts: [] }

  componentDidMount(){
    axios.get('/api/posts')
    .then( res => {
      this.setState({ posts: res.data })
    })
  }

  timeFormat = (props) => {
    const newDate = new Date(props)
     return ( newDate.toDateString()  )
  }

  render(){
    const { posts } = this.state
    return(
      <Card.Group itemsPerRow={3}>
        { posts.map(post => 
          <Card key={post.id}>
          {/* TODO : make into links to Post.js show page */}
            <Image src={post.image} />
            <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Meta>Published { this.timeFormat(post.created_at) }</Card.Meta>
            </Card.Content>

          </Card>
        ) }
      </Card.Group>
    )
  }
}

export default Posts