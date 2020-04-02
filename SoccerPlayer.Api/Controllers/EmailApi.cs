using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoccerPlayer.Api.IRepository;
using SoccerPlayer.Api.Models.Dtos;

namespace SoccerPlayer.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailApi : ControllerBase
    {
        private IEmailRepository _repo;
        public EmailApi(IEmailRepository repo)
        {
            _repo = repo;
        }

        [Route("[action]")]
        [HttpPost("SendEmail")]
        public IActionResult SendEmail([FromForm] MessageDto message)
        {
            if (message.From == null || message.Subject == null || message.Content == null) return BadRequest("Wszystkie pola muszą być wypełnione");

            var _message = new MessageDto(message.From, message.Subject, message.Content);
            return Ok();
        }

        [Route("[action]")]
        [HttpPost("SendEmailAsync")]
        public async Task<IActionResult> SendEmailAsync([FromForm] MessageDto message)
        {
            if (message.From == null || message.Subject == null || message.Content == null) return BadRequest("Wszystkie pola muszą być wypełnione");
            var _message = new MessageDto(message.From, message.Subject, message.Content);

            await _repo.SendEmailAsync(_message);
            return Ok();
        }
    }
}