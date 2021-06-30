from rest_framework import generics, status, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from api.serializers import UserSerializer, CourseSerializer, DetailCourseSerializer
from .models import Course

import json 

class UserCreate(generics.CreateAPIView):
    """
        Create an user.
        Needed information: username(String), password(String) and email(String).
    """
    authentication_classes = ()
    permission_classes = (AllowAny, )
    serializer_class = UserSerializer

class CoursesList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    permission_classes = (IsAuthenticated, )
    serializer_class = CourseSerializer

    def create(self, request, *args, **kwargs):
        request_post = json.loads(request.body)
        course_id = request_post["id"]
        method = request_post["method"]
        if method == 'create':
            res = request.user.course.add(Course.objects.get(id=course_id))
            return Response({"status": "create exito"})
        else:
            res = request.user.course.remove(Course.objects.get(id=course_id))
            return Response({"status": "delete exito"})


class MyCoursesList(generics.ListAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        queryset = self.request.user.course.all()
        return queryset

class CoursePage(generics.RetrieveAPIView):
    permission_classes = (AllowAny, )
    serializer_class = DetailCourseSerializer
    queryset = Course.objects.all()

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token'             : token.key
            , 'user_id'         : user.pk
            , 'email'           : user.email
            , 'is_student'      : user.is_student
            , 'is_teacher'      : user.is_teacher
            , 'profile_picture' : user.profile_picture.url
            , 'github_url'      : user.github_url
            , 'username'        : user.username
        })