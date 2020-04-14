import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { Box } from '@material-ui/core';
import VolunteerOpportunityCard from '../../components/VolunteerOpportunityCard/VolunteerOpportunityCard';

const ngoSummary = [
  {
    name: 'Akshay Patra',
    ngoDescription:
      'Running mid-day meal programmes and serving school lunches to over 1.8 million children across 12 states and 2 union territories',
    supportDescription:
      'Register yourself as an online fund raising volunteer. Fund raised will go to providing mid-day meal to the school children. Dedicated fundraisers are acknowledged for their efforts on select collaterals of Akshaya Patra.',
    beneficiaries: 'School Children',
    location: 'Remote / Virtual',
    skillsNeeded: ['Microsoft Office skills', 'Fundraising experience'],
    contactInformation: {
      email: 'anil.rs@akshayapatra.org',
      phone: '080 30143400'
    }
  }
];

class VolunteerOpenings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box component='div' display='block'>
        <Row>
          <VolunteerOpportunityCard ngoSummary={ngoSummary} />
        </Row>
      </Box>
    );
  }
}

export default withRouter(VolunteerOpenings);
