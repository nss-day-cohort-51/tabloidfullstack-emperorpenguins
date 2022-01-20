using System;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        Category GetById(int id);
        void CreateCategory(Category category);
        void EditCategory(Category category);
    }
}