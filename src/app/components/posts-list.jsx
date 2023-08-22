'use client'
import { useRouter } from 'next/navigation'
import { useEffect, experimental_useOptimistic as useOptimistic } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
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

  const supabase = createClientComponentClient()
  const router = useRouter()
  useEffect(() => {
    const channel = supabase.channel('realtime-posts')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'posts'
    }, (payload) => {
      router.refresh()
    }).subscribe()
    return () => {
    supabase.channel(channel).unsubscribe()
    }
  }, [supabase, router])
  

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
