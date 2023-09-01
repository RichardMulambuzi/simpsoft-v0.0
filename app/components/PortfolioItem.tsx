import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface PortfolioItemProps {
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
