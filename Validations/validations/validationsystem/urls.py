from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('base', views.base, name='base'), 
    path('select-role/', views.select_role, name='select-role'),
    path('admin-login/', views.login_view, name='admin-login'),
    path('admin-page/', views.admin_page, name='admin-page'),
]