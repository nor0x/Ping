import React from 'react';

import { Title } from './Title'
import { SubTitle } from './SubTitle'
import { CreateIssueButton } from './CreateIssueButton'

import './index.css'

export const Header = () => (
  <header className="heading">
    <Title />
    <SubTitle />
    <CreateIssueButton />
  </header>
)