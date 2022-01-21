using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration config) : base(config) { }
        public void AddComment(Comment comment)
        {
            throw new System.NotImplementedException();
        }
        public void DeleteComment(int commentId)
        {
            throw new System.NotImplementedException();
        }
        public List<Comment> GetPostComments(int postId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT c.Id AS CommentId, c.PostId, c.UserProfileId, c.Subject, c.Content, c.CreateDateTime AS CommentCreateDateTime,
                            p.Title, p.Content AS PostContent, 
                            p.ImageLocation AS HeaderImage,
                            p.CreateDateTime AS PostCreateDateTime, p.PublishDateTime, p.IsApproved,
                            p.CategoryId, p.UserProfileId AS PostUserProfileId,
                            u.FirstName, u.LastName, u.DisplayName, u.FirebaseUserId, 
                            u.Email, u.CreateDateTime AS UserProfileCreateDateTime, u.ImageLocation AS AvatarImage,
                            u.UserTypeId
                        FROM Comment c
                            LEFT JOIN Post p ON c.PostId = p.Id
                            LEFT JOIN UserProfile u ON c.UserProfileId = u.id
                        WHERE c.PostId = @id AND p.IsApproved = 1 AND p.PublishDateTime < SYSDATETIME()
                        ORDER BY c.CreateDateTime DESC
                        ";
                    cmd.Parameters.AddWithValue("@id", postId);
                    var reader = cmd.ExecuteReader();
                    var comments = new List<Comment>();
                    while (reader.Read())
                    {
                        comments.Add(NewCommentFromReader(reader));
                    }
                    reader.Close();
                    return comments;
                }
            }
        }
        public void UpdateComment(Comment comment)
        {
            throw new System.NotImplementedException();
        }
        private Comment NewCommentFromReader(SqlDataReader reader)
        {
            return new Comment()
            {
                Id = reader.GetInt32(reader.GetOrdinal("CommentId")),
                Subject = reader.GetString(reader.GetOrdinal("Subject")),
                Content = reader.GetString(reader.GetOrdinal("Content")),
                CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CommentCreateDateTime")),
                UserProfile = new UserProfile()
                {
                    // I am only using the needed data for getting a post's comments:
                    DisplayName = reader.GetString(reader.GetOrdinal("DisplayName"))
                },
                Post = new Post()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                    Title = reader.GetString(reader.GetOrdinal("Title")),
                    Content = reader.GetString(reader.GetOrdinal("PostContent")),
                    ImageLocation = DbUtils.GetString(reader, "HeaderImage"),
                    CreateDateTime = reader.GetDateTime(reader.GetOrdinal("PostCreateDateTime")),
                    PublishDateTime = DbUtils.GetNullableDateTime(reader, "PublishDateTime"),
                    CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId"))                  
                }
            };
        }
    }
}
