"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('signupreq/', views.signupreq, name='signupreq'),
    path('signinreq/', views.signinreq, name='signinreq'),
    path('signout/', views.signout, name="signout"),
    path('menu/', views.menu, name="menu"),
    path('menu/lightup/', views.lightup),
    path('menu/lightup/on', views.lightOn),
    path('menu/lightup/off', views.lightOff),
    path('menu/lamp/', views.lamp)
]
