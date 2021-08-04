# Generated by Django 3.1.7 on 2021-07-08 01:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210703_1138'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='task',
        ),
        migrations.AddField(
            model_name='task',
            name='file',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.file', verbose_name='File'),
        ),
    ]
