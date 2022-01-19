using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAll());
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var category = _categoryRepository.GetById(id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }


        //[HttpGet("GetWithComments")]
        //public IActionResult GetWithComments()
        //{
        //    var categorys = _categoryRepository.GetAllWithComments();
        //    return Ok(categorys);
        //}


        //[HttpPost]
        //public IActionResult Post(Category category)
        //{
        //    _categoryRepository.Add(category);
        //    return CreatedAtAction("Get", new { id = category.Id }, category);
        //}


        //[HttpPut("{id}")]
        //public IActionResult Put(int id, Category category)
        //{
        //    if (id != category.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _categoryRepository.Update(category);
        //    return NoContent();
        //}


        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _categoryRepository.Delete(id);
        //    return NoContent();
        //}


        //[HttpGet("search")]
        //public IActionResult Search(string q, bool sortDesc)
        //{
        //    return Ok(_categoryRepository.Search(q, sortDesc));
        //}


        //[HttpGet("hottest")]
        //public IActionResult SearchByDate(string since)
        //{
        //    return Ok(_categoryRepository.SearchByDate(since));
        //}


    }
}