import LoginPage from "../pages/LoginPage";
import PostCreatePage from "../pages/PostCreatePage";
import PostsPage from "../pages/PostPage/PostsPage";
import RegistrationPage from "../pages/RegistrationPage";

export const privateRoutes = [
    {path: '/posts', element: <PostsPage />},
    {path: '/createPost', element: <PostCreatePage />}
];

export const publicRoutes = [
    {path: '/login', element: <LoginPage />},
    {path: '/registration', element: <RegistrationPage />},
];