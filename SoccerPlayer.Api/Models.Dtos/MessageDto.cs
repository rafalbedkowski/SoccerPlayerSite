using System.Collections.Generic;
using System.Linq;
using MimeKit;

namespace SoccerPlayer.Api.Models.Dtos
{
    public class MessageDto
    {
        public string From { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        
        public MessageDto()
        {

        }

        public MessageDto(string from, string subject, string content)
        {
            From = from;
            Subject = subject;
            Content = content;
        }
    }
}