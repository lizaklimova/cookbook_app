import React from 'react';

export interface RestrictedRouteProps {
  component: React.ComponentType<any>;
  redirectTo: string;
}
