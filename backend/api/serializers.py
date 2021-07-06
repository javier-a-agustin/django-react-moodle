from rest_framework import serializers
from .models import User, Course, Task, File
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):

        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
        )

        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'profile_picture', 'github_username', 'is_student', 'is_teacher')

class CourseSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField('get_image_url')
    registered = serializers.SerializerMethodField('get_user_status') 

    class Meta:
        model = Course
        fields = ('id', 'name', 'description', 'max_number_students', 'image', 'image_url', 'registered')

    def get_image_url(self, obj): 
        return obj.image.url

    def get_user_status(self, obj):
        courses = self.context["request"].user.course.all()
        for course in courses:
            if course.name ==  obj.name:
                return True
        return False

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    files = FileSerializer(source='file_set', many=True)

    class Meta:
        model = Task
        fields = "__all__"

class DetailCourseSerializer(serializers.ModelSerializer):
    #task_list = serializers.RelatedField(source='task', read_only=True)
    task_list = TaskSerializer(source='task_set', many=True)

    class Meta:
        model = Course
        fields = "__all__"