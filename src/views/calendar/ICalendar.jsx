import React, { Component } from "react";
import '../../sass/base_style.styl'
import '../../sass/date_picker.styl'
import SimpleReactCalendar from "simple-react-calendar";
class ICalendar extends Component {
  render() {
    return (
      
        <>
        <SimpleReactCalendar
          blockClassName="date_picker"
         
          onSelect={({start, end}) => {
            console.log('>>>>>', {start, end})
          }}
        />
      </>
      
    );
  }
}
export default ICalendar;
  /*
  <div>
        <Container>
          <Header>Calender</Header>
          
          <SimpleReactCalendar MonthHeaderComponent activeMonth={new Date()} />
        </Container>
      </div>
*/