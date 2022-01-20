using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        void AddPost(Post post);
        void DeletePost(int postId);
        List<Post> GetAllPublishedPosts();
        List<Post> GetCurrentUsersPostsById(int id);
        Post GetPublishedPostById(int id);
        Post GetUserPostById(int id, int userProfileId);
        void UpdatePost(Post post);
    }
}