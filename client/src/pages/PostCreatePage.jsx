import React from 'react';
import { useState } from 'react';
import { createPost } from '../actions/posts';
import { useSelector } from 'react-redux';

const PostCreatePage = () => {
    const [text, setText] = useState('')
    const isAuth = useSelector(state => state.user.isAuth)
    const username = localStorage.getItem('username')

    return (
        <div className="min-h-screen bg-gray-100 py-1 flex flex-col justify-center sm:py-5">
            <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
                <div className="relative py-5 bg-white shadow-lg sm:rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto flex flex-col">
                        <div className='mb-[5px]'>Текст поста</div>
                        <textarea value={text} onChange={(e) => setText(e.target.value)} className='rounded-[10px] text-[12px] w-[350px] h-[120px] border border-black p-1 mb-[10px]'></textarea>
                        <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => isAuth ? createPost(text, username) : alert('Вы не авторизированы!')}>Создать пост</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCreatePage;
