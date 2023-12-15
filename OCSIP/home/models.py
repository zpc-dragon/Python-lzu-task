from django.db import models
# models.py


# class student(models.Model):
#     SEX_CHOICES = ((1, '男'), (2, '女'), (3, '保密'))
#     name = models.CharField(max_length=20, verbose_name='姓名')
#     age = models.IntegerField(help_text='正数', verbose_name='年龄')
#     sex = models.IntegerField(
#         choices=SEX_CHOICES, verbose_name='性别', default=3)

#     class Meta:
#         verbose_name_plural = verbose_name = '学生'

#     def __str__(self) -> str:
#         return f'{self.name},{self.age},{self.sex}'


# class account(models.Model):
#     username = models.CharField(max_length=20, verbose_name='用户名')
#     token = models.CharField(max_length=50, verbose_name='token')
#     date_hierarchy = 'pub_date'

#     class Meta:
#         verbose_name_plural = verbose_name = '账户'

#     def __str__(self) -> str:
#         return f'{self.username}:{self.token}'


class data(models.Model):
    username = models.CharField(max_length=20, verbose_name='用户名')
    token = models.CharField(max_length=50, verbose_name='token')
    dataset_name = models.CharField(max_length=50, verbose_name='数据集名称')
    dataset_created_time = models.DateTimeField(verbose_name='数据集创建时间')
    dataset_updated_time = models.DateTimeField(verbose_name='数据集更新时间')
    img_name = models.CharField(max_length=50, verbose_name='图片名称')
    img_created_time = models.DateTimeField(verbose_name='图片创建时间')
    img_class = models.CharField(max_length=50, verbose_name='图片类别')
    img_show = models.ImageField(upload_to='static/data/pictures', verbose_name='图片展示')
