const contentNode =document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return <div>Placeholder for the issue filter</div>
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td> 
        <td>{issue.status}</td> 
        <td>{issue.owner}</td> 
        <td>{issue.created.toDateString()}</td> 
        <td>{issue.effort}</td> 
        <td>{issue.completionDate ? issue.
          completionDate.toDateString() : '' }
        </td> 
        <td>{issue.title}</td> 
      </tr>
    );
  }
}

IssueRow.defaultProps = {
  issue_title: "Stosh"
};

class IssueTable extends React.Component {
  render() {
    const borderStyle = {border: "1px solid silver", padding: 6}
    const issueRows = this.props.issues.map(issue =>
      <IssueRow key={issue.id} issue={issue} />)
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>Placeholder for the issue add</div>
  }
}

const issues = [
  {
    id: 1, status: 'Closed', owner: 'Ben',
    created: new Date("2019-05-23"), effort: 6, completionDate: undefined,
    title: "Errror in console while clicking 'Add'"
  },
  {
    id: 2, status: 'Open', owner: 'Ochuodho',
    created: new Date("2019-03-23"), effort: 4, completionDate: new Date("2019-05-24"),
    title: "Missing bottom border on panel"
  },
];

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues };
    setTimeout(this.createTestIssue.bind(this), 3000);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({issues: newIssues})
  }

  createTestIssue() {
    this.createIssue({
      status: 'Open', owner: 'Gathee',
      created: new Date("2019-04-23"), effort: 4,
      title: "You can choose to include date of completion"
    });
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd />
      </div>
    );
  }
}

ReactDOM.render(<IssueList />, contentNode);
