<template>
    <div class="container">
        <div class="eCalendar">
            <div class="heading text-center">
                <h2>Event Calendar</h2>
            </div>
            <div class="body">
                <div class="event">
                    <div class="sDate">
                        <div class="sDay">
                            <span class="digit">{{longDay.getDate()}}</span>
                            <span class="dayName">{{ day[longDay.getDay()] }}</span>
                        </div>


                        <div class="sYearAndMonth">
                            <span class="sYear">{{longDay.getFullYear()}}</span>
                            <span class="sMonth">{{ month[longDay.getMonth()] }}</span>
                        </div>
                    </div>

                    <div class="eventDetail" v-for="(event, index) in calendarOptions.events" :key="index" v-if="event.date == eData ">
                        <div class="title">
                            <h6>{{ event.title}}</h6>
                        </div>
                        <div class="description">
                            <div class="time">
                                <span>{{ event.start_time}}</span> -
                                <span>{{ event.end_time}}</span>
                            </div>
                            <div class="eDescription">
                                <p>{{ event.detail}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="eventDetail" v-else>
                        <p>No Event Available!</p>
                    </div> -->
                </div>

                <div class="calendar">
                  <FullCalendar :options="calendarOptions"  />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import timeGridPlugin from '@fullcalendar/timegrid'
  import axios from "axios";
export default {
    name: 'Event_Calendar',
    components: {
      FullCalendar // make the <FullCalendar> tag available
    },
    data() {
      return {
        calendarOptions: {
          plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin ],
          headerToolbar: {
            left: '',
            center: 'title',
            right: 'prev,next today',
          },
          initialView: 'dayGridMonth',
          editable: true,
          selectable: true,
          selectMirror: true,
          dayMaxEvents: true,
          weekends: true,
          select: this.handleDateSelect,
          eventClick: this.handleEventClick,
          dateClick: this.handleDateClick,
          events: "",
        },
        events: "",
        isEvent: false,
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        eventYear: '',
        eData: "",
        longDay: new Date(),

        // currentDate: longDay.getFullYear() + "-" + (longDay.getMonth()+1) + "-" + (longDay.getDate()+1),
      }
    },

    methods: {
      currentDate(){
        var d = new Date();
          this.eData= d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
      },
      handleDateClick: function(arg) {
        let data =  arg.dateStr;
        let dataLong =  arg.date;

        year = this.eventYear;
        month = this.eventYear;

        // alert(year);
        this.isEvent = true;
        this.eData = data;
        this.longDay = dataLong;
        let res = this.eData.split("-");
        let year = res[0];
        let month = res[1];
        this.events = this.calendarOptions.events;
        // console.log(arg.date);
      },
      handleEvents(events) {
        this.currentEvents = events
      },

      getEventCalender(){
        axios.get('get-event-calendar').then((response) => {
          if(response.status == 200){
            this.calendarOptions.events = response.data.details.eventCalendar;
            this.events = response.data.details.latestEvent;
            if(this.events !==null){
              this.eData = response.data.details.latestEvent.date;
              this.longDay = new Date (response.data.details.latestEvent.date);
            }

          }
        }).catch(error => console.log(error));

      },
      getLatestEventDate(aa) {
          this.longDay = new Date(aa);
      }
    },
    created() {
      this.getEventCalender();
    //   this.currentDate();
    //   this.getLatestEventDate(this.event.data);
    }
}
</script>
<style scoped>
    .eCalendar .heading {
        margin: 30px 0 20px 0;
        text-transform: uppercase;
    }
    .eCalendar .body {
        border: 1px solid #f2f2f2;
        display: flex;
    }
    .eCalendar .body .event {
        flex-basis: 45%;
        background: #00a6b4;
        color: #fff;
        padding: 40px 40px;
    }
    .eCalendar .body .event .sDate {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 2px solid rgba(34, 34, 34, 0.418);
        padding-bottom: 10px;
        margin: 0 0 15px 0;
    }
    .eCalendar .body .event .sDate .sDay {
        line-height: 1;

    }
    .eCalendar .body .event .sDate .sDay .digit {
        font-size: 50px;
    }
    .eCalendar .body .event .sDate .sDay .dayName {
        font-size: 18px
    }
    .eCalendar .body .event .sDate .sYearAndMonth {
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .eCalendar .body .event .sDate .sYearAndMonth .sYear {
        font-size: 30px;
        line-height: 1;
    }
    .eCalendar .body .event .sDate .sYearAndMonth .sMonth {
        font-size: 18px;
    }

    .eCalendar .body .event .eventDetail .title{
        margin: 10px 0 15px 0;
    }
    .eCalendar .body .event .eventDetail .description {
        display: flex;
    }
    .eCalendar .body .event .eventDetail .description .time {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        font-size: 12px;
    }
    .eCalendar .body .event .eventDetail .description .eDescription {
        flex-basis: 1;
        background: rgba(255, 255, 255, 0.15);
        width: 100%;
        min-height: 150px;
        padding: 20px
    }
    .eCalendar .body .event .eventDetail .description .eDescription p{
        font-size: 14px;
    }

    .eCalendar .body .calendar {
        flex: 1;
        background: #f2f2f2;
        padding: 20px;
    }


    @media screen and (max-width: 600px){
        .eCalendar .body {
            flex-direction: column;
        }
        .eCalendar .body .event {
            order: 2;
        }

        .eCalendar .body .calendar {
            order: 1;
        }
    }

    table tbody tr:first-child {
       background: #dddddd!important;
       color: #fff;
    }
</style>
