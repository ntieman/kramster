import React from 'react';
import API from '../../components/API';
import Button from '../../components/Button';

class Exams extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      school: props.params.school,
      course: props.params.course,
      exams: [],
    };
  }

  componentDidMount() {
    this.fetchExams();
  }

  fetchExams() {
    API.get(`/api/list/exams/${this.state.school}/${this.state.course}`, { sort: '-alphabetically' }).then((data) => {
      this.setState({ exams: data });
    });
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-sm-4">
            <Button
              type="special"
              href={`/${this.state.school}/${this.state.course}/random/10`}
            >10 Random</Button>
          </div>
          <div className="col-sm-4">
            <Button
              type="special"
              href={`/${this.state.school}/${this.state.course}/random/30`}
            >30 Random</Button>
          </div>
          <div className="col-sm-4">
            <Button
              type="special"
              href={`/${this.state.school}/${this.state.course}/hardest/10`}
            >10 Hardest</Button>
          </div>
        </div>

        <div className="row top-buffer">
          { this.state.exams.map((exam, index) => (
            <div key={exam}>
              {index % 2 === 0 ? <div className="clearfix visible-sm-block" /> : null }
              {index % 3 === 0 ? <div className="clearfix visible-md-block" /> : null }
              {index % 4 === 0 ? <div className="clearfix visible-lg-block" /> : null }

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Button href={`/${this.state.school}/${this.state.course}/${exam}`}>{ exam }</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Exams;