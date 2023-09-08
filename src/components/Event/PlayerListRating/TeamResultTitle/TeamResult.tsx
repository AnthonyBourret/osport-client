import React from 'react';
import TeamWin from './TeamWin';
import TeamLose from './TeamLose';
import TeamDraw from './TeamDraw';

interface TeamResultProps {
  scoreTeam1: number;
  scoreTeam2: number;
  team: string;
}

function TeamResult({ scoreTeam1, scoreTeam2, team } : TeamResultProps) {
  if (scoreTeam1 > scoreTeam2) return <TeamWin team={team} />;
  if (scoreTeam1 < scoreTeam2) return <TeamLose team={team} />;
  if (scoreTeam1 === scoreTeam2) return <TeamDraw team={team} />;
}

export default TeamResult;
