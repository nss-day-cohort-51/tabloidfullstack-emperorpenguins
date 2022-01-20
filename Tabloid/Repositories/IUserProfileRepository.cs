using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        public UserProfile GetByFirebaseUserId(string firebaseUserId);
        public List<UserProfile> GetAllProfiles();
    }
}