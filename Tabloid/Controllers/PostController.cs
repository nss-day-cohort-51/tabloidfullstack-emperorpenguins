using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepo;
        private readonly IUserProfileRepository _userProfileRepository;
        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepo = postRepository;
            _userProfileRepository = userProfileRepository;
        }
        // GET: api/<PostController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepo.GetAllPublishedPosts());
        }
        [HttpGet("userposts")]
        public IActionResult GetUserPosts()
        {
            var claim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;
            return Ok(_postRepo.GetCurrentUsersPostsByFirebaseId(claim));
        }
        // GET api/<PostController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepo.GetPublishedPostById(id);
            if(post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // POST api/<PostController>
        [HttpPost]
        public IActionResult AddPost(Post post)
        {
            var currentUserProfile = GetCurrentUserProfile();
            post.UserProfileId = currentUserProfile.Id;
            //post.IsApproved = true;
            if(currentUserProfile.UserTypeId == 1)
            {
                post.IsApproved = true;
            }
            else
            {
                post.IsApproved = false;
            }
            post.CreateDateTime = DateTime.Now;
            _postRepo.AddPost(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if(id != post.Id)
            {
                return BadRequest();
            }

            _postRepo.UpdatePost(post);
            return NoContent();
        }

        // DELETE api/<PostController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepo.DeletePost(id);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
