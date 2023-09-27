from django.urls import path
from . import views

urlpatterns = [
    path('admin-login/', views.login_view, name='login_view'),
    path('admin-page/', views.admin_page, name='admin-page'),
]