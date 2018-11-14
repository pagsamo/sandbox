from django.urls import path
from . import views


urlpatterns = [
    # post_views
    path('login/', views.user_login, name='login'),
]