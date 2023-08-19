'use client'
import { experimental_useOptimistic as useOptimistic } from 'react'
import PostCard from './post-card'

export default function PostsList({ posts }) {
  const [optimisticPost, addOptimisticPost] = useOptimistic(
    posts,
    (currentOptimisticPost, newPost) =>{
      const newOptimisticPost = [...currentOptimisticPost]
      const index = newOptimisticPost.findIndex(post => post.id === newPost.id)
      newOptimisticPost[index] = newPost
      return newOptimisticPost
    }
  
  )

  return (
    <>
        {
          optimisticPost?.map(post => {
          const {
            id,
            user,
            content,
            created_at,
            likes
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl,
            
          } = user

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userFullName={userFullName}
              userName={userName}
              createdAt={created_at}
              likes={likes}
              post={post}
              addOptimisticPost={addOptimisticPost}
            />
          )
        })
      }
    </>
  )
}
