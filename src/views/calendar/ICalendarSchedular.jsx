import React from 'react';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda
} from "@syncfusion/ej2-react-schedule";
class ICalenderSchedular extends React.Component {


  render() {
    return (
      <ScheduleComponent >

        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default ICalenderSchedular;



/*
import React from 'react';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel
} from "@syncfusion/ej2-schedule";
class ICalenderSchedular extends React.Component {

  private localData:EventSettingsModel ={
dataSource:[{
    EndTime:new Date(2019,0,11,6,30),
    StateTime: new Date(2019,0,11,4,0)
}]
  };

  render() {
    return (
      <ScheduleComponent >
          evenSettings={this.localData}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default ICalenderSchedular;

*/