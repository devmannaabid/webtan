 document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Month view
      height: 550,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Team Meeting',
          start: '2025-10-15T10:00:00',
          end: '2025-10-15T12:00:00'
        },
        {
          title: 'Project Deadline',
          start: '2025-10-20'
        },
        {
          title: 'Client Call',
          start: '2025-10-22T14:00:00'
        }
      ]
    });

    calendar.render();
  });