# Generated by Django 3.1.1 on 2020-10-25 17:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('less5', '0003_productmodel_deq'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productmodel',
            name='deq',
        ),
    ]
