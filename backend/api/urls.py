from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from api.views import UserCreate, CoursesList, MyCoursesList, CoursePage, CustomAuthToken
from rest_framework.authtoken import views

urlpatterns = [
    # Users
    path("register/", UserCreate.as_view(), name='regisetr'),
    path('login/', CustomAuthToken.as_view(), name='login'),

    # Generic
    path("courses/", CoursesList.as_view(), name='courses'),
    path("my-courses/", MyCoursesList.as_view(), name='my courses'),
    path("course/<int:pk>/", CoursePage.as_view(), name='course'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)