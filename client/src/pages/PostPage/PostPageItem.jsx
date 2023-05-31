import React from 'react';
import { deletePost, editPost } from '../../actions/posts';

const PostPageItem = ({ post }) => {
    const serverDate = new Date(post.dateCreate);
    const hours = serverDate.getHours() < 10 ? `0${serverDate.getHours()}` : serverDate.getHours();
    const minutes = serverDate.getMinutes() < 10 ? `0${serverDate.getMinutes()}` : serverDate.getMinutes();
    const formattedDate = `${serverDate.getDate()}/${serverDate.getMonth() + 1}/${serverDate.getFullYear()} ${hours}:${minutes}`;
    return (
        <div>
            <div className='w-[600px] flex flex-col bg-gray-300 mb-6 p-3'>
                <div className='flex justify-between w-full'>
                    <div>{post.author}</div>
                    <div>{formattedDate}</div>
                </div>
                <div className='my-2'>{post.text}</div>
                <div className='flex justify-end'>
                    <button className='bg-gray-400 p-1 mr-2' onClick={() => { deletePost(post._id) }}>Удалить</button>
                    <button className='bg-gray-400 p-1' onClick={() => { editPost(post._id, prompt('Введите новый текст')) }}>Изменить</button>
                </div>

            </div>
        </div>
    );
}

export default PostPageItem;
