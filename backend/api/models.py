from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser, models.Model):

    profile_picture     = models.ImageField(upload_to="images/users", default="images/default.jpg")
    github_url          = models.CharField(max_length=200)
    email               = models.CharField(max_length=200)
    course              = models.ManyToManyField("api.Course", blank=True)
    task                = models.ManyToManyField("api.Task", blank=True)
    is_student          = models.BooleanField(default=True)
    is_teacher          = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.username} - {self.email}"


class Course(models.Model):
    name                    = models.CharField(max_length=200)
    description             = models.TextField()
    max_number_students     = models.IntegerField(default=40)
    password                = models.CharField(max_length=200, blank=True)
    image                   = models.ImageField(default='default-image.jpg', upload_to='courses/')

    def __str__(self):
        return f"{self.name} {self.max_number_students}"

class Task(models.Model):
    date_from = models.DateField()
    date_to = models.DateField()
    description = models.TextField()

    # files = models.FileField(blank=True)
    
    course = models.ForeignKey("api.Course", verbose_name="Course", on_delete=models.CASCADE)

class File(models.Model):
    file = models.FileField(blank=True)
    name = models.CharField(max_length=200, blank=True)
    task = models.ForeignKey(Task, verbose_name="Task", on_delete=models.CASCADE, blank=True)