# Generated by Django 3.1.7 on 2021-03-15 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='image',
            field=models.ImageField(default='default-image.jpg', upload_to='courses/'),
        ),
    ]