import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import service from '../appwrite/Service';
import { Button, Container } from '../Components';
import parse from 'html-react-parser';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Post = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug)
                .then((p) => {
                    if (p) setPost(p);
                    else navigate('/');
                })
                .catch(() => navigate('/'))
                .finally(() => setLoading(false)); // Stop loading when data is fetched
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    const deletePost = async () => {
        await service.deleteFile(post.featuredImage).then(async()=>{
            const status = await service.deletePost(slug);
            if (status) navigate('/');
        }).catch(()=>{
            return "download failed !!";
        })
        
    };

    return (
        <div className="py-8">
            <Container>
                {/* Image Section */}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {loading ? (
                        <Skeleton height={400} width="100%" />
                    ) : (
                        <img
                            src={service.previewFile(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl"
                        />
                    )}

                    {/* Edit/Delete Buttons (Only for Author) */}
                    {isAuthor && !loading && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Title Section */}
                <div className="w-full text-white mb-6">
                    {loading ? (
                        <Skeleton width={300} height={30} />
                    ) : (
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                    )}
                </div>

                {/* Content Section */}
                <div className="browser-css text-blue-100">
                    {loading ? (
                        <Skeleton count={5} />
                    ) : (
                        parse(post.content)
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Post;
