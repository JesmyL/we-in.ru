import { UziApp } from '$uzi/app/App';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <UziApp />;
}
