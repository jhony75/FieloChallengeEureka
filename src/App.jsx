import {
  Auth,
  Users,
  UserById,
  UserActivities,
  Programs,
  ProgramsLevels,
  Levels,
} from './api/fieloRequest';

import './styles/global.scss';

export default function App() {
  return (
    <>
      <h1>Inside Query Client</h1>
      <Auth />
      <Users />
      <UserById />
      <UserActivities />
      <Programs />
      <ProgramsLevels />
      <Levels />
    </>
  );
}
