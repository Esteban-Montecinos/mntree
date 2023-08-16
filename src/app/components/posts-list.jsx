import React from 'react'
import PostCard from './post-card'

export default function PostsList({posts = []}) {
  return (
    <>
        {
        posts?.map(post => {
          const {
            id,
            user,
            content,
            created_at
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
            />
          )
        })
      }
    </>
  )
}
