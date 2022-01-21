using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }
        // GET: api/<CommentController>
        [HttpGet("{postId}")]
        public IActionResult Get(int postId)
        {
            var comments = _commentRepository.GetPostComments(postId);
            return Ok(comments);
        }

        // POST api/<CommentController>
        [HttpPost]
        public IActionResult AddComment(Comment comment)
        {
            throw new System.NotImplementedException();
        }

        // PUT api/<CommentController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            throw new System.NotImplementedException();
        }

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
