using System;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
       List<Category> GetAll();
       Category GetById(int id);    
        
    }
}