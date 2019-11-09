
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
} from '@syncfusion/ej2-react-schedule';
class ICalenderSchedular extends React.Component {
private localData:EventSettingsModel ={
    dataSource:[{
        EndTime:new Date(2019,10,11,6,30),
        StartTime:new Date(2019,10,11,4,30),
    }]
      };
    
    render() {
    return (
      <ScheduleComponent currentView='Month' 
         eventSettings={this.localData}  >
    
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
} from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from "@syncfusion/ej2-data";
class ICalenderSchedular extends React.Component {
   private localData:EventSettingsModel ={
    dataSource:[{
        EndTime:new Date(2019,0,11,6,30),
        StartTime:new Date(2019,0,11,4,0)
    }]
      };
      
   public render() {
    return (
      <ScheduleComponent currentView='Month' selectedDate={new Date(2017,5,5)} eventSettings={{dataSource:this.remoteData}}   >
             
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}
export default ICalenderSchedular;



*/
