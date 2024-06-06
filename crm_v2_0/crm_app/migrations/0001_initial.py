# Generated by Django 5.0.1 on 2024-01-17 08:31

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
                ('Type', models.CharField(max_length=30)),
                ('Color', models.CharField(max_length=20)),
                ('Guest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='guest', to=settings.AUTH_USER_MODEL)),
                ('Master', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='master', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]