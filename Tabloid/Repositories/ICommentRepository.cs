using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        void AddComment(Comment comment);
        void DeleteComment(int commentId);
        void UpdateComment(Comment comment);
        List<Comment> GetPostComments(int postId);
    }
}
