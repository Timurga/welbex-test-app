import React from 'react';
import { deletePost, editPost } from '../../actions/posts';
import { useSelector } from 'react-redux';

const PostPageItem = ({ post }) => {
    const serverDate = new Date(post.dateCreate);
    const hours = serverDate.getHours() < 10 ? `0${serverDate.getHours()}` : serverDate.getHours();
    const minutes = serverDate.getMinutes() < 10 ? `0${serverDate.getMinutes()}` : serverDate.getMinutes();
    const formattedDate = `${serverDate.getDate()}/${serverDate.getMonth() + 1}/${serverDate.getFullYear()} ${hours}:${minutes}`;
    const username = useSelector(state => state.user.username)
    return (
        <div>
            <div className='w-[600px] flex flex-col bg-gray-300 mb-6 p-3'>
                <div className='flex justify-between w-full'>
                    <div>{post.author}</div>
                    <div>{formattedDate}</div>
                </div>
                <div className='my-2'>{post.text}</div>
                {username === post.author
                    ? <div className='flex justify-end'>
                        <button className='bg-gray-400 p-1 mr-2' onClick={() => { deletePost(post._id, post.author, username) }}>Удалить</button>
                        <button className='bg-gray-400 p-1' onClick={() => { editPost(post._id, post.author, prompt('Введите новый текст'), username) }}>Изменить</button>
                    </div>
                    : <div></div>
                }


            </div>
        </div>
    );
}

export default PostPageItem;