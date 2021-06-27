from django.contrib import admin
from .models import User, Course, Task, File

admin.site.register(User)
admin.site.register(Course)
admin.site.register(Task)
admin.site.register(File)