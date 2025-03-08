import { Routes } from '@angular/router';

export const routes: Routes = [
    
// {
//     path: '',
//     loadComponent: () => import('./main/dashboard/nav/nav.component').then(a => a.NavComponent)
// },
// {
//     path: 'cards',
//     loadComponent: () => import('./main/dashboard/cards/cards.component').then(y => y.CardsComponent)
// },

// {
//     path: 'sidenav',
//     loadComponent: () => import('./main/dashboard/sidenav/sidenav.component').then(y => y.SidenavComponent)
// },

// {
//     path: 'footer',
//     loadComponent: () => import('./main/dashboard/footer/footer.component').then(y => y.FooterComponent)
// },
{
    path: '',
    loadComponent: () => import('./main/dashboard/dashboard.component').then(y => y.DashboardComponent)
},
];
