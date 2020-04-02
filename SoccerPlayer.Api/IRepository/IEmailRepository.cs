using System.Threading.Tasks;
using SoccerPlayer.Api.Models.Dtos;

namespace SoccerPlayer.Api.IRepository
{
    public interface IEmailRepository
    {
        void SendEmail(MessageDto message);
        Task SendEmailAsync(MessageDto message);
    }
}