import 'moment';
import 'moment/locale/ru';

if (process.env.NODE_ENV === 'production') {
  window.Raven.config('https://9484607a45bc4b0e9e4efdc538c2f03c@sentry.team.devchain.tech/18').install();
}
